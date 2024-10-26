import React from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import "./ProductDetail.css";
const products = [
  {
    id: 1,
    name: 'Vitamin C',
    price: 10,
    description: 'Immune support',
    image: 'https://imgs.search.brave.com/MWrJt98eDdt-gf9xfskIz3EMnfuW367v_9RwUcJxucA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYWRo/aXBwaWUuY29tL2Nk/bi9zaG9wL2ZpbGVz/L1JlZmlsbGFibGVW/aXRDLmpwZz92PTE3/MTI4NTE3OTcmd2lk/dGg9MjA0OA',
  },
  {
    id: 2,
    name: 'Aspirin',
    price: 5,
    description: 'Pain reliever',
    image: 'https://imgs.search.brave.com/l6K-0QxnNScte1GoObD_AXbXb0ZeMOlSMYgCOP9pS-k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy5h/bWF6b25hd3MuY29t/L2Ntcy5pcHJlc3Ny/b29tLmNvbS82Ny9m/aWxlcy8yMDEyNS81/MGRjZTA1MjI5Mzcx/YTI2ODYwMDAwYjFf/QXNwaXJpbl9Cb3R0/bGVfMzI1X21nX0Rv/c2UvQXNwaXJpbl9C/b3R0bGVfMzI1X21n/X0Rvc2VfZmIzMDhj/YzQtOWNjMC00MzVk/LTg4MjktMGU4NTE5/ODQxOTExLXBydi5q/cGc',
  },
  {
    id: 3,
    name: 'Omega 3',
    price: 15,
    description: 'Heart health',
    image: 'https://imgs.search.brave.com/Edcw6wcdSywTA1EBlyrAIlsMeeNcu7I8XZdswkjhC-M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudGhjZG4uY29t/L2ltYWdlcy9sYXJn/ZS9vcmlnaW5hbC8v/cHJvZHVjdGltZy8x/NjAwLzE2MDAvMTA1/MjkzMjktNTc4NDg2/MDM5ODUwOTY4OS5q/cGc',
  },
  {
    id: 4,
    name: 'Ibuprofen',
    price: 8,
    description: 'Anti-inflammatory',
    image:'https://imgs.search.brave.com/Tr1iCOuwhpcukha8TRidr9t-ulx9QEjyK8g7dALyPng/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWFjZ2lsbC5jb20v/bWVkaWEvY2F0YWxv/Zy9wcm9kdWN0L2Nh/Y2hlLzEvaW1hZ2Uv/NDUweDQ1MC85ZGY3/OGVhYjMzNTI1ZDA4/ZDZlNWZiOGQyNzEz/NmU5NS8xLzIvMTIw/OF8yLmpwZw'
  },
  {
    id: 5,
    name: 'Multivitamin',
    price: 20,
    description: 'Daily essential vitamins',
    image: 'https://imgs.search.brave.com/HigW2DFV_A7G0aQ50ExSP-Ps-jNLgssoK0ursM2ZWOM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9uZXdj/aGFwdGVyLmNvbS9j/ZG4vc2hvcC9maWxl/cy9UaW55VGFic2Jv/dC5wbmc_dj0xNzE2/NDA5MjQ4JndpZHRo/PTEyODA',
  },
  {
    id: 6,
    name: 'Paracetamol',
    price: 7,
    description: 'Fever reducer',
    image: 'https://imgs.search.brave.com/oQDuSxXIky5mP5d9ZG_YF4uSKz8WzVW8hhZzkwKdhfE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wcm9k/dWN0aW1hZ2VzLmNv/bGVzLmNvbS5hdS9w/cm9kdWN0aW1hZ2Vz/LzEvMTQ4NjAyMS5q/cGc',
  },
  {
    id: 7,
    name: 'Antacid',
    price: 6,
    description: 'Stomach relief',
    image: 'https://imgs.search.brave.com/APNYSXViHeFbQLyIE_gv18SgU_w0Cp1gur5g0hTh2bM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdj/ZG4ubWNrZXNzb24u/Y29tL0N1bXVsdXNX/ZWIvSW1hZ2VzL0hp/Z2hfUmVzLzExMDM5/NTlfcGtnZnJvbnQu/anBn',
  },
  {
    id: 8,
    name: 'Cough Syrup',
    price: 12,
    description: 'Cough relief',
    image: 'https://imgs.search.brave.com/mRW_gLD0Hs018PddEAgGLlksS2_jprWehD-728IgQEg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8zLmlt/aW1nLmNvbS9kYXRh/My9ERS9VVy9NWS0z/NzczNTMxL2VzdGlj/b2Ytc3lydXAtNTAw/eDUwMC5qcGc',
  },
  {
    id: 9,
    name: 'Antibiotic Cream',
    price: 25,
    description: 'Skin infection treatment',
    image: 'https://imgs.search.brave.com/_D0VCR41tVrxnSdrsdC3VIxMutsdRs0YUeS2IasE4G0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFMNXd0YktxNUwu/anBn',
  },
  {
    id: 10,
    name: 'Allergy Tablets',
    price: 9,
    description: 'Seasonal allergy relief',
    image: 'https://images.ctfassets.net/k3yb2k40jz5v/AzICU8SIAXeb4lFQQiSE4/7cf13dd1b259e8ee5cbc5cecba68c3f6/1_zyrtec-allergy-relief-tablets-en-us',
  },
  {
    id: 11,
    name: 'Pain Relief Gel',
    price: 18,
    description: 'Muscle pain relief',
    image: 'https://imgs.search.brave.com/1LlpTr8ZdJbgkjEAzrPfG-GwXN6likeEkGz5GQwcscU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL3ZhZGVyLXBy/b2QuczMuYW1hem9u/YXdzLmNvbS8xNjU5/OTY5NjU3LWJpb2Zy/ZWV6ZS1yb2xsLW9u/LW11c2xjZS1ydWIt/MTY1OTk2OTYzNy5q/cGc_Y3JvcD0xeHc6/MXhoO2NlbnRlcix0/b3AmcmVzaXplPTk4/MDoq',
  },
  {
    id: 12,
    name: 'Probiotic Capsules',
    price: 30,
    description: 'Gut health support',
    image :"https://imgs.search.brave.com/45ahz4Rt4HZoxzWhbo6zf8uk53Tw5rCrZaUbliUkCbg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtZXUuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxeGtJM3VGdTZM/Ll9BQ19VTDMwMF9T/UjMwMCwyMDBfLmpw/Zw",
  }
];
function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  if (!product) {
    return <h2>Product not found</h2>;
  }
  const handleAddToCart = (product) => {
    addToCart(product); 
    toast.success(`${product.name} added to cart successfully!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };
  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ₹ {product.price}</p>
      <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
      <ToastContainer />
    </div>
  );
}
export default ProductDetail;
