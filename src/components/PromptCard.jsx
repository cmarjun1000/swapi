const PromptCard = ({ post }) => {
  let keys = Object.keys(post);
  return (
    <div className="prompt_card">
      <div className="flex-1 justify-start items-center">
        <h3 className="font-semibold text-gray-900">
          {post.name || post.title}
        </h3>
      </div>
      {keys.map((item, index) => (
        <p key={index} className="font-inter text-sm text-gray-500">
          {post[item]}
        </p>
      ))}
    </div>
  );
};

export default PromptCard;
