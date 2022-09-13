import FormikCheckBox from "../../../../components/FormikCheckBox"

const FilterGroup = ({item, ...props}) => {
    return (
        <div className="mb-4">
            <h4 className="mb-3 text-xl font-semibold tablet:text-base">{item.name}</h4>
            <div className="flex flex-wrap gap-3">
                {item.attributes.map(attr => {
                    return (
                        <FormikCheckBox 
                            key={attr.id}
                            label={attr.name}
                            name={item.name}
                            value={attr.value || attr.name}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default FilterGroup