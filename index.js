const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props
  return <button className{`button ${className}`}>{buttonText}</button>;
};

const element = (
  <div>
    <div className="bg-container">
      <h1 className="heading">Social Buttons</h1>
      <div className = "button-container">
          <Button buttonText = "Like" className = "like-button" />
          <Button buttonText = "Comment" className = "comment-button" />
          <Button buttonText = "Share" className = "share-button" />
      </div>
    </div>
   
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
