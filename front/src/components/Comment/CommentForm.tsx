function CommentForm() {
  return (
    <>
      <div>
        <form>
          <div className="w-full mb-4 rounded-lg bg-dark-gray dark:bg-gray-700 ">
            <div className="flex items-center justify-between px-3 py-2 border-b ">
              <div className="flex flex-wrap items-center justify-center">
                <h2 className="w-full text-center text-white font-semibold">
                  Cet article vous a plus? Laissez nous un commentaire !
                </h2>
              </div>
            </div>
            <div className="px-4 py-2 h-32 bg-white rounded-b-lg dark:bg-gray-800">
              <label className="sr-only">Publish post</label>
              <textarea
                id="editor"
                className="block w-full px-0 h-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Bonjour ..."
                required
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2 text-sm font-medium text-center bg-orange rounded-lg  hover:border hover:border-dark-gray  hover:bg-orange-light"
          >
            Commenter
          </button>
        </form>
      </div>
    </>
  );
}

export default CommentForm;
