import styles from "./ProductDetailNutrition.module.css";

export default function ProductDetailNutrition({ nutrition }) {
  return (
    <table className={(styles.table, styles.tableNutrition)}>
      <thead>
        <tr>
          <th>Nutrients</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Proteins</td>
          <td>{nutrition.protein}գ</td>
        </tr>
        <tr>
          <td>Carbs</td>
          <td>{nutrition.carbs}գ</td>
        </tr>
        <tr>
          <td>Fats</td>
          <td>{nutrition.fat}գ</td>
        </tr>
        <tr>
          <td>Salts</td>
          <td>{nutrition.salt}գ</td>
        </tr>
      </tbody>
    </table>
  );
}
