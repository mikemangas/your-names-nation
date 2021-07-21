import useFetch from "../hooks/useFetch";

export default function Gender() {
  const { gender } = useFetch();
  return (
    <section className="gender">
      <h2>Is your gender really {gender} ?</h2>
    </section>
  );
}
