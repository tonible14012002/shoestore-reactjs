import FilterGroup from "./FilterGroup"

const FilterCategories = ({categories, ...props}) => {
    const category = {
        name:"category",
        attributes: categories
    }
    return (
        <FilterGroup item={category} />
    )
}

export default FilterCategories