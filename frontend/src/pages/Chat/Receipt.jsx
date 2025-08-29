import React, { useEffect, useState } from "react";
import { CloudArrowUpIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import api from "../../services/api";
import CustomModal from "./CustomModal";

function Receipt({
  selectedReceipt,
  receiptDetails,
  onSaveSuccess,
}) {
  const [uploadFile, setUploadFile] = useState(null);
  const [receiptInfo, setReceiptInfo] = useState(null);
  const [editInfo, setEditInfo] = useState(null);

  const [reportStart, setReportStart] = useState("");
  const [reportEnd, setReportEnd] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [saveModalOpen, setSaveModalOpen] = useState(false);

  useEffect(() => {
    if (receiptDetails) {
      setReceiptInfo(null);

      // extracted_text 문자열 파싱
      let extracted = {};
      if (typeof receiptDetails.extracted_text === "string") {
        try {
          const jsonStr = receiptDetails.extracted_text.replace(/'/g, '"');
          extracted = JSON.parse(jsonStr);
        } catch (e) {
          extracted = {};
        }
      } else if (typeof receiptDetails.extracted_text === "object") {
        extracted = receiptDetails.extracted_text;
      }

      setEditInfo({
        결제처: receiptDetails.store_name || extracted.결제처 || "",
        결제일시: receiptDetails.payment_date || extracted.결제일시 || "",
        총합계: receiptDetails.amount || extracted.총합계 || 0,
        카드정보: extracted.카드정보 || "",
        품목: Array.isArray(extracted.품목)
          ? extracted.품목.map((item) => ({ ...item }))
          : [],
      });
    } else if (receiptInfo) {
      setEditInfo({
        결제처: receiptInfo.extracted?.결제처 || "",
        결제일시: receiptInfo.extracted?.결제일시 || "",
        총합계: receiptInfo.extracted?.총합계 || 0,
        카드정보: receiptInfo.extracted?.카드정보 || "",
        품목: receiptInfo.extracted?.품목
          ? receiptInfo.extracted.품목.map((item) => ({ ...item }))
          : [],
      });
    } else {
      setEditInfo(null);
    }
  }, [receiptDetails, receiptInfo]);

  const handleEditChange = (field, value) => {
    setEditInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleItemChange = (idx, field, value) => {
    setEditInfo((prev) => ({
      ...prev,
      품목: prev.품목.map((item, i) =>
        i === idx ? { ...item, [field]: value } : item
      ),
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!uploadFile) {
      alert("업로드할 파일을 선택해주세요.");
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("files", uploadFile);

      const response = await api.post("/receipt/upload/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.success) {
        setReceiptInfo(response.data.data);
        console.log("영수증 처리 내역:", response.data.data);
      } else {
        alert(response.data.message || "텍스트 추출 실패");
      }
    } catch (error) {
      console.error("텍스트 추출 오류:", error);
      alert(
        error.response?.data?.message || "텍스트 추출 중 오류가 발생했습니다."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!reportStart || !reportEnd) {
      alert("기간을 선택해주세요.");
      return;
    }

    try {
      const response = await api.get("/receipt/download/", {
        params: { start_date: reportStart, end_date: reportEnd },
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        `receipt_data_${reportStart}_${reportEnd}.csv`
      );
      document.body.appendChild(link);
      link.click();
      link.remove();

      alert("다운로드 성공!");
    } catch (error) {
      console.error("다운로드 오류:", error);
      alert(
        error.response?.data?.message || "다운로드 중 오류가 발생했습니다."
      );
    }
  };

  const handleSave = async () => {
    if (!receiptInfo || !editInfo) {
      alert("저장할 영수증 정보가 없습니다.");
      return;
    }
    setIsLoading(true);
    try {
      const payload = {
        file_id: receiptInfo.file_id,
        store_name: editInfo.결제처,
        payment_date: editInfo.결제일시,
        amount: Number(editInfo.총합계),
        card_info: editInfo.카드정보,
        items: editInfo.품목.map((item) => ({
          품명: item.품명,
          단가: Number(item.단가),
          수량: Number(item.수량),
          금액: Number(item.금액),
        })),
      };
      const response = await api.post("/receipt/save/", payload);
      if (response.data.success) {
        alert("영수증이 성공적으로 저장되었습니다.");
        if (onSaveSuccess) onSaveSuccess();
        setReceiptInfo(null);
        setEditInfo(null);
        setUploadFile(null);
      } else {
        alert(response.data.message || "저장에 실패했습니다.");
      }
    } catch (error) {
      console.error("영수증 저장 오류:", error);
      alert(error.response?.data?.message || "저장 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!selectedReceipt) {
    return (
      <div className="flex flex-col items-center justify-center h-[100dvh] text-gray-500">
        <img
          src="/images/NAVI.png"
          alt="NAVI Logo"
          className="w-24 h-auto mb-4"
        />
        <div className="text-xl font-bold text-gray-700">
          영수증 처리 도우미
        </div>
        <p className="mt-4">영수증을 선택하거나 새 영수증을 생성하세요.</p>
      </div>
    );
  }

  const isViewingExisting = !!receiptDetails;
  const isEditing = !!editInfo;

  return (
    <div className="flex flex-col w-full h-screen bg-gray-100 sm:px-8 md:px-16 lg:px-32 xl:px-60">
      {isLoading && (
        <div className="flex flex-col items-center justify-center absolute inset-0 bg-white bg-opacity-70 z-50">
          <div className="text-xl font-bold text-gray-700 mb-2">
            {isLoading ? "영수증 처리 중..." : "데이터 로딩 중..."}
          </div>
          <div className="mt-2 text-gray-400">잠시만 기다려주세요.</div>
          <svg
            className="animate-spin h-8 w-8 text-orange-400 mt-6"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            />
          </svg>
        </div>
      )}

      {isEditing ? (
        <div className="flex-1 overflow-y-auto py-4">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-xl mx-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {isViewingExisting ? "영수증 상세 정보" : "영수증 정보 편집"}
            </h2>
            <div className="space-y-3">
              {receiptInfo?.file_name && (
                <div className="flex items-center">
                  <span className="w-32 text-gray-500 font-semibold">
                    파일명
                  </span>
                  <span className="text-gray-700">{receiptInfo.file_name}</span>
                </div>
              )}
              <div className="flex items-center">
                <span className="w-32 text-gray-500 font-semibold">결제처</span>
                <input
                  type="text"
                  className="border rounded px-2 py-1 flex-1"
                  value={editInfo.결제처}
                  onChange={(e) => handleEditChange("결제처", e.target.value)}
                  readOnly={isViewingExisting}
                />
              </div>
              <div className="flex items-center">
                <span className="w-32 text-gray-500 font-semibold">
                  결제일시
                </span>
                <input
                  type="text"
                  className="border rounded px-2 py-1 flex-1"
                  value={editInfo.결제일시}
                  onChange={(e) => handleEditChange("결제일시", e.target.value)}
                  readOnly={isViewingExisting}
                />
              </div>
              <div className="flex items-center">
                <span className="w-32 text-gray-500 font-semibold">
                  카드정보
                </span>
                <input
                  type="text"
                  className="border rounded px-2 py-1 flex-1"
                  value={editInfo.카드정보}
                  onChange={(e) => handleEditChange("카드정보", e.target.value)}
                  readOnly={isViewingExisting}
                />
              </div>
              <div className="flex items-center">
                <span className="w-32 text-gray-500 font-semibold">총합계</span>
                <input
                  type="number"
                  className="border rounded px-2 py-1 flex-1"
                  value={editInfo.총합계}
                  onChange={(e) => handleEditChange("총합계", e.target.value)}
                  readOnly={isViewingExisting}
                />
              </div>
              {editInfo.품목?.length > 0 && (
                <div>
                  <span className="w-32 text-gray-500 font-semibold">품목</span>
                  <div className="overflow-x-auto">
                    <table className="min-w-full mt-2 text-sm border">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-2 py-1 border">품명</th>
                          <th className="px-2 py-1 border">단가</th>
                          <th className="px-2 py-1 border">수량</th>
                          <th className="px-2 py-1 border">금액</th>
                        </tr>
                      </thead>
                      <tbody>
                        {editInfo.품목.map((item, idx) => (
                          <tr key={idx}>
                            <td className="px-2 py-1 border">
                              <input
                                type="text"
                                className="border rounded px-1 py-0.5 w-full"
                                value={item.품명}
                                onChange={(e) =>
                                  handleItemChange(idx, "품명", e.target.value)
                                }
                                readOnly={isViewingExisting}
                              />
                            </td>
                            <td className="px-2 py-1 border">
                              <input
                                type="number"
                                className="border rounded px-1 py-0.5 w-full"
                                value={item.단가}
                                onChange={(e) =>
                                  handleItemChange(idx, "단가", e.target.value)
                                }
                                readOnly={isViewingExisting}
                              />
                            </td>
                            <td className="px-2 py-1 border">
                              <input
                                type="number"
                                className="border rounded px-1 py-0.5 w-full"
                                value={item.수량}
                                onChange={(e) =>
                                  handleItemChange(idx, "수량", e.target.value)
                                }
                                readOnly={isViewingExisting}
                              />
                            </td>
                            <td className="px-2 py-1 border">
                              <input
                                type="number"
                                className="border rounded px-1 py-0.5 w-full"
                                value={item.금액}
                                onChange={(e) =>
                                  handleItemChange(idx, "금액", e.target.value)
                                }
                                readOnly={isViewingExisting}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
            {!isViewingExisting && (
              <div className="mt-6 flex justify-center">
                <button
                  className="px-4 py-2 bg-orange-300 text-white rounded-lg shadow hover:bg-orange-400"
                  onClick={() => setSaveModalOpen(true)}
                >
                  최종 저장
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <img
            src="/images/NAVI.png"
            alt="NAVI Logo"
            className="w-24 h-auto mb-4"
          />
          <div className="text-xl font-bold text-gray-700">
            영수증 처리 도우미
          </div>
          <p className="mt-4 text-gray-500">
            영수증 업로드와 보고서 추출 기능을 이용해보세요.
          </p>
        </div>
      )}

      {saveModalOpen && (
        <CustomModal
          open={saveModalOpen}
          title="영수증 저장"
          message="영수증 정보를 최종 저장하시겠습니까?"
          confirmText="저장하기"
          cancelText="취소하기"
          onConfirm={() => {
            handleSave();
            setSaveModalOpen(false);
          }}
          onCancel={() => setSaveModalOpen(false)}
        />
      )}

      {selectedReceipt?.isNew && !isEditing && (
        <div className="flex justify-center flex-shrink-0 p-4">
          <div className="flex flex-col md:flex-row bg-white rounded-lg w-full max-w-4xl p-4 gap-4">
            <div className="flex-1 flex flex-col justify-between items-center p-4 border rounded-md gap-2">
              <h3 className="text-lg font-semibold">영수증 업로드</h3>
              <label
                htmlFor="file-upload"
                className="flex items-center justify-center p-2 border-2 border-dashed border-gray-300 cursor-pointer hover:bg-gray-50 w-full h-16"
              >
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                {uploadFile ? (
                  <span className="font-semibold">{uploadFile.name}</span>
                ) : (
                  <>
                    <CloudArrowUpIcon className="h-8 w-8 text-gray-400 m-2" />
                    <span className="font-semibold">파일을 선택하세요</span>
                  </>
                )}
              </label>
              <button
                onClick={handleUpload}
                className="px-4 py-2 bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 w-full"
                disabled={isLoading || !uploadFile}
              >
                {isLoading ? "처리 중..." : "업로드"}
              </button>
            </div>
            <div className="flex-1 flex flex-col gap-2 justify-between items-center p-4 border rounded-md">
              <h3 className="text-lg font-semibold">영수증 다운로드</h3>
              <input
                type="month"
                value={reportStart}
                onChange={(e) => setReportStart(e.target.value)}
                className="w-full h-8 p-2 border rounded-md"
              />
              <input
                type="month"
                value={reportEnd}
                onChange={(e) => setReportEnd(e.target.value)}
                className="w-full p-2 h-8 border rounded-md"
              />
              <button
                onClick={handleDownload}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-200 rounded-lg shadow-lg hover:bg-gray-300 w-full justify-center"
              >
                <ArrowDownTrayIcon className="h-5 w-5" />
                <span>다운로드</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Receipt;
