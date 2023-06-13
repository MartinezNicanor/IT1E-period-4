import './../css/components.css';

const Link = ({route, label}) => {
  return (
      <a href={"./"} className={"link"}>{label}</a>
  );
}

export default Link;