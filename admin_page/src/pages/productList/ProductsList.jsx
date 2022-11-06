import { DataGrid } from "@mui/x-data-grid";
import "./productList.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProducts, getProducts } from "../../redux/apiCalls";

function ProductsList() {
  const handleDelete = (id) => {
    deleteProducts(id, dispatch);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);
  const products = useSelector((state) => state.product.products);

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='productListItem'>
            <img src={params.row.img} alt='' className='productListImg' />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },

    {
      field: "price",
      headerName: "price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/product/" + params.row._id}>
              <button className='productListEdit'>Edit</button>
            </Link>
            <DeleteIcon
              className='productListDelete'
              onClick={() => handleDelete(params.row._id)}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div className='productsList'>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={8}
        getRowId={(row) => row._id}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default ProductsList;
