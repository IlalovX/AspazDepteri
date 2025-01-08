import RecipeCard from '../components/RecipeCard'
import { food } from '../db/links'

export default function Recipes() {
	const recipes = food.sort(() => Math.random() - 0.5)

	return (
		<div>
			<div className='recipes-container'>
				{recipes.map((recipe, index) => (
					<RecipeCard key={index} recipe={recipe} />
				))}
			</div>
		</div>
	)
}
