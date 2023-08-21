interface ListProps<T> {
  title: string;
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
  data: T[];
}

export default function List<T extends unknown>({
  title,
  renderItem,
  keyExtractor,
  data,
}: ListProps<T>) {
  return (
    <div className="w-72 h-full shadow-primary dark:shadow-primary shadow-[inset_0_0_5px_2px] dark:shadow-[inset_0_0_5px_2px] p-6">
      <h3 className="text-black dark:text-white text-xl">{title}</h3>
      <ul>
        {data.map((item: T) => (
          <div className="item mt-4" key={keyExtractor(item)}>
            {renderItem(item)}
          </div>
        ))}
      </ul>
    </div>
  );
}
