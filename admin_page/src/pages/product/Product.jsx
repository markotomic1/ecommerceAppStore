import "./product.css";
import { Link, useLocation } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import PublishOutlinedIcon from "@mui/icons-material/PublishOutlined";
import { useSelector } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import { userRequest } from "../../requestMethods";

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [productStats, setProductStats] = useState([]);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/orders/income?pid=" + productId);
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) =>
          setProductStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, [MONTHS, productId]);

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>Product</h1>
        <Link to='/newProduct'>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className='productTop'>
        <div className='productTopLeft'>
          <Chart
            data={productStats}
            dataKey='Sales'
            title='Sales Performance'
          />
        </div>
        <div className='productTopRight'>
          <div className='productInfoTop'>
            <img src={product.img} alt='' className='productInfoImg' />
            <span className='productName'>{product.title}</span>
          </div>
          <div className='productInfoBottom'>
            <div className='prodctInfoItem'>
              <span className='productInfoKey'>id:</span>
              <span className='productInfoValue'>{product._id}</span>
            </div>
            <div className='prodctInfoItem'>
              <span className='productInfoKey'>sales:</span>
              <span className='productInfoValue'></span>
            </div>

            <div className='prodctInfoItem'>
              <span className='productInfoKey'>in stock:</span>
              <span className='productInfoValue'>
                {product.inStock ? "yes" : "no"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <label>Product name</label>
            <input type='text' placeholder={product.title} />
            <label>Product desc</label>
            <input type='text' placeholder={product.desc} />
            <label>Product price</label>
            <input type='number' placeholder={product.price} />
            <label>In Stock</label>
            <select name='inStock' id='idStock'>
              <option value='true'>yes</option>
              <option value='false'>no</option>
            </select>
          </div>
          <div className='productFormRight'>
            <div className='productsUploads'>
              <img src={product.img} alt='' className='productUploadImg' />
              <label htmlFor='file'>
                <PublishOutlinedIcon />
              </label>
              <input type='file' id='file' style={{ display: "none" }} />
            </div>
            <button className='productButton'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
