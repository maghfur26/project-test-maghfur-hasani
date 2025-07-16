import Banner from "../components/fragments/Banner";
import ListPost from "../components/fragments/PostList";

const HomePages = () => {
  const banners = [
    {
      id: 1,
      title: "Slide 1",
      subtitle: "lorem ipsum dolor sit amet",
      image: "https://swiperjs.com/demos/images/nature-1.jpg",
    },
    {
      id: 2,
      title: "Slide 2",
      subtitle: "nature is awesome",
      image: "https://swiperjs.com/demos/images/nature-2.jpg",
    },
    {
      id: 3,
      title: "Slide 3",
      subtitle: "lorem ipsum dolor sit amet",
      image: "https://swiperjs.com/demos/images/nature-3.jpg",
    },
  ];
  return (
    <div className="h-full pb-10">
      <Banner banners={banners} />
      <ListPost/>
    </div>
  );
};

export default HomePages;
