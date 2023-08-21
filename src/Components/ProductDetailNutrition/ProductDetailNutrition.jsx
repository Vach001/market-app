import styles from "./ProductDetailNutrition.module.css";

export default function ProductDetailNutrition({ nutrition }) {
  return (
    <table className={styles.classNames("table", "tableNutrition")}>
      <thead>
        <tr>
          <th>Սննդանյութեր</th>
          <th>Քանակ</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Պրոտեին</td>
          <td>{nutrition.protein}գ</td>
        </tr>
        <tr>
          <td>Ածխաջրեր</td>
          <td>{nutrition.carbs}գ</td>
        </tr>
        <tr>
          <td>ճարպեր</td>
          <td>{nutrition.fat}գ</td>
        </tr>
        <tr>
          <td>Աղեր</td>
          <td>{nutrition.salt}գ</td>
        </tr>
      </tbody>
    </table>
  );
}
