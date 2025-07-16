import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";

interface CardProps {
  id: number;
  publishedAt: string;
  title: string;
  image: string;
}

const CardComponent = ({
  id,
  title,
  publishedAt,
  image,
}: CardProps) => {
  return (
    <Card
      key={id}
      sx={{
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardActionArea
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        {/* Thumbnail dengan rasio 16:9 */}
        <Box sx={{ position: "relative", width: "100%", pt: "56.25%" }}>
          <CardMedia
            component="img"
            image={image}
            alt={title}
            loading="lazy"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        <CardContent sx={{ flexGrow: 1 }}>
          {/* Tanggal */}
          <Typography variant="body2" sx={{ mb: 1, color: "text.secondary" }}>
            {new Date(publishedAt).toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Typography>

          {/* Judul maksimal 3 baris */}
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
