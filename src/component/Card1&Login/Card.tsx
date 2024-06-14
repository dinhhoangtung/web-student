type Item = {
  id: number;
  text: string;
  link: string;
  date: string;
};
export interface CardProps {
  title: string;
  list: Item[];
}

const Card = (props: CardProps) => {
  const { title, list } = props;

  return (
    <div className="rounded-lg shadow-xl border border-gray-400 gap-5    items-center">
      <h3 className="text-[13px] font-bold py-3 px-4 bg-gradient-to-r from-slate-600 to-white rounded-t-lg border-gray-400">
        {title}
      </h3>
      <ul className="gap-5 font-sans px-[5px] py-[10px] items-center text-align ">
        {list.map((item) => (
          <li key={item.id}>
            <a href="{item.link}">{item.text}</a>
            <span>({item.date})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Card;
