import { useToast } from "../contexts/toast.context";

function ToastForm() {
  const { showToast } = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();

    const { title, content, exposureTime } = event.target.elements;
    const duration = parseInt(exposureTime.value) || 2000;

    if (!title.value || !content.value) {
      alert("제목과 내용을 모두 입력해 주세요");
      return;
    }

    showToast({ title: title.value, content: content.value, duration });
  };
  return (
    <div>
      <form
        className="flex flex-col min-w-[320px] gap-y-6"
        onSubmit={handleSubmit}
      >
        <h1 className=" text-center text-2xl font-bold tracking-tight text-gray-900">
          토스트 컨트롤러
        </h1>
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-1.5">
            <label className="text-sm font-medium" htmlFor="title">
              제목 (필수)
            </label>
            <input
              type="text"
              className="block w-full rounded-md border-0 px-4 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
              name="title"
              id="title"
              defaultValue="Scheduled: Catch up"
            />
          </div>
          <div className="flex flex-col gap-y-1.5">
            <label className="text-sm font-medium" htmlFor="content">
              내용 (필수)
            </label>
            <input
              type="text"
              className="block w-full rounded-md border-0 px-4 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
              name="content"
              id="content"
              defaultValue="Friday, February 10, 2023 at 5:57 PM"
            />
          </div>
          <div className="flex flex-col gap-y-1.5">
            <label className="text-sm font-medium" htmlFor="exposureTime">
              노출 시간(ms) (선택)
            </label>
            <input
              type="number"
              className="block w-full rounded-md border-0 px-4 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
              name="exposureTime"
              id="exposureTime"
              defaultValue="2000"
            />
          </div>
        </div>
        <button className="bg-black text-white py-3 text-[15px] rounded-md hover:bg-black/70">
          토스트 띄우기
        </button>
      </form>
    </div>
  );
}

export default ToastForm;
