import AdminArticleForm from "../components/AdminArticle/AdminArticleForm";
import ArticleTab from "../components/AdminArticle/ArticleTab";

function AdminArticle() {
  return (
    <>
      <div className="w-full h-[80vh] flex">
        <div className="w-1/2 p-8">
          <AdminArticleForm />
        </div>
        <div className="w-1/2 p-8">
          <ArticleTab />
        </div>
      </div>
    </>
  );
}

export default AdminArticle;
