export async function fetchCars() {
	const headers = {
		'X-RapidAPI-Key': 'bbd562bc01msh8e61bf35f12e44bp13b4a4jsnb47200328b07',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
	}

	const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { headers: headers })
	const result = await response.json()
	return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50 // Base rental price per day in dollars
	const mileageFactor = 0.1 // Additional rate per mile driven
	const ageFactor = 0.05 // Additional rate per year of vehicle age

	// Calculate additional rate based on mileage and age
	const mileageRate = city_mpg * mileageFactor
	const ageRate = (new Date().getFullYear() - year) * ageFactor

	// Calculate total rental rate per day
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

	return rentalRatePerDay.toFixed(0)
}

export const updateSearchParams = (type: string, value: string) => {
	// Get the current URL search params
	const searchParams = new URLSearchParams(window.location.search)

	// Set the specified search parameter to the given value
	searchParams.set(type, value)

	// Set the specified search parameter to the given value
	const newPathname = `${window.location.pathname}?${searchParams.toString()}`

	return newPathname
}
