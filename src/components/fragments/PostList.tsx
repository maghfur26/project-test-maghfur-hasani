import { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "../elements/CardComponent";
import { useSearchParams } from "react-router-dom";
import PaginationComponent from "../elements/PaginationComponent";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || 1);
  const size = Number(searchParams.get("size") || 10);
  const sort = searchParams.get("sort") || "-published_at";

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${page}&page[size]=${size}&append[]=small_image&append[]=medium_image&sort=${sort}`
      );
      setPosts(res.data.data);
      setTotalItems(res.data.meta.total);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [page, size, sort]);

  const totalPages = Math.ceil(totalItems / size);

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({ page: "1", size: e.target.value, sort });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value =
      e.target.value === "newest" ? "-published_at" : "published_at";
    setSearchParams({ page: "1", size: size.toString(), sort: value });
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setSearchParams({ page: value.toString(), size: size.toString(), sort });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
        <div>
          Showing {(page - 1) * size + 1} - {Math.min(page * size, totalItems)}{" "}
          of {totalItems}
        </div>
        <div className="flex gap-4 flex-wrap">
          <label className="flex items-center gap-2">
            Show per page:
            <select
              value={size}
              onChange={handleSizeChange}
              className="border rounded px-2 py-1"
            >
              {[10, 20, 50].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-2">
            Sort by:
            <select
              value={sort === "-published_at" ? "newest" : "oldest"}
              onChange={handleSortChange}
              className="border rounded px-2 py-1"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </label>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-10">Loading...</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {posts.map((post: any) => (
              <CardComponent
                key={post.id}
                id={post.id}
                title={post.title}
                publishedAt={new Date(post.published_at).toLocaleDateString(
                  "en-US",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                )}
                image={post.medium_image?.url || ""}
              />
            ))}
          </div>
          <PaginationComponent
            page={page}
            totalPages={totalPages}
            onChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default PostList;
