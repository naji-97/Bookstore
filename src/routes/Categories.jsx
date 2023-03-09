import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';
import Button from '../components/Button';

function Categories() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories.status);

  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <h1>Categories</h1>
      <Button onClick={handleCheckStatus} value="Check Status" />
      {status && <p>{status}</p>}
    </div>
  );
}

export default Categories;
