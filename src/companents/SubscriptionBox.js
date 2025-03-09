export default function SubscriptionBox() {
  return (
    <div className="mt-8 flex w-full max-w-4xl items-center justify-between rounded-lg bg-gray-100 p-6 shadow-lg">
      <div>
        <h3 className="text-lg font-bold">
          Subscribe now for special features!
        </h3>
        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet</p>
      </div>
      <button className="rounded-md bg-red-500 px-6 py-2 font-semibold text-white">
        Subscribe now
      </button>
    </div>
  );
}
