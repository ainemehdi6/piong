import AdminArticleForm from "../components/AdminArticle/AdminArticleForm";
import ArticleTab from "../components/AdminArticle/ArticleTab";

function AdminArticle() {
  return (
    <>
      <div className="w-full h-auto flex flex-col">
        <div className="w-full h-100vh p-8">
          <AdminArticleForm />
        </div>
        <div className="w-full p-8 px-48">
          <ArticleTab />
        </div>
      </div>
    </>
  );
}

export default AdminArticle;
