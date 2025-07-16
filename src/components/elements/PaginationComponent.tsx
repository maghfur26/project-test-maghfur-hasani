import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const PaginationComponent = ({
  page,
  totalPages,
  onChange,
}: PaginationProps) => {
  return (
    <Stack spacing={2} alignItems="center" mt={4}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={onChange}
        variant="outlined"
        shape="rounded"
        siblingCount={1}
        boundaryCount={1}
        showFirstButton
        showLastButton
        sx={{
          "& .MuiPaginationItem-root": {
            color: "black", 
            borderColor: "black", 
          },
          "& .Mui-selected": {
            backgroundColor: "orange",
            color: "white",
            borderColor: "orange",
            "&:hover": {
              backgroundColor: "#e69500",
            },
          },
        }}
      />
    </Stack>
  );
};

export default PaginationComponent;
