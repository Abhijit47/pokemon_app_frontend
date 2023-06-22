import React from 'react';

const Alert = (props) => {
  // console.log(props);
  const capitalizeWord = (word) => {
    const lower = word.toLowerCase();
    console.log(lower.charAt(0).toUpperCase() + lower.slice(1));
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: "50px" }}>
      {
        props.alert &&
        <div className={`alert alert-${props.alert.type} alert-dismissible fade`} role="alert">
          <strong>
            {capitalizeWord(props.alert.type)}
          </strong>:{props.alert.msg}
          {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
      }
    </div >
  );
};

export default Alert;