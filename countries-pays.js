import countries  from "./countries"
import pays from "./pays"

let translateCountriesName = {
    french: () => pays,
    english: () => countries
}

export default translateCountriesName