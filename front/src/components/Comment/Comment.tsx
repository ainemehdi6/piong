function Comment() {
  return (
    <section className="bg-white dark:bg-gray-900 py-4  antialiased border-b border-gray-200 rounded-lg my-2">
      <div className="max-w-2xl mx-auto px-4">
        <article className="p-2 text-base bg-white rounded-lg dark:bg-gray-900">
          <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <p className="inline-flex items-center mr-3 text-sm text-gray-900 text-dark-gray font-semibold">
                Michael Gough
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span>Feb. 8, 2022</span>
              </p>
            </div>
          </footer>
          <p className="text-gray-500 dark:text-gray-400">
            Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for
            the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Comment;
