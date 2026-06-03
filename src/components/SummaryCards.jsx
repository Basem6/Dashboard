export default function SummaryCards({ cards }) {
  return (
    <section className="mt-3 px-3 min-w-full">
      <div className="title text-lg max-w-full">Scholar Summary Cards</div>
      <div className="cards flex flex-wrap justify-between gap-3 mt-1">
        {cards.map((card, index) => (
          <div
            key={card.label}
            className={`${index === cards.length - 1 ? "card-last" : "card"} bg-[#0f1219] px-2 pt-1 py-3 sm:w-52 md:w-72 min-h-16 flex-grow`}
          >
            <div className="top flex justify-between items-center text-gray-200">
              <span>{card.label}</span>
              <span className={card.icon} />
            </div>
            <div className="center font-bold text-2xl">{card.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
