export const countryNameFormatter = (country_name: string) => {
  return new Promise((resolve) => {
    let country_name_array = country_name.split(' ')

    for (let index: number = 0; index < country_name_array.length; index++) {
      country_name_array[index] =
        country_name_array[index].charAt(0).toUpperCase() +
        country_name_array[index].slice(1)
    }

    resolve(country_name_array.join(' '))
  }) as Promise<string>
}

export const capitalizeCountryCode = (country_code: string) => {
  return new Promise((resolve) => {
    for (let index: number = 0; index < country_code.length; index++) {
      country_code[index].toUpperCase()
    }

    resolve(country_code)
  }) as Promise<string>
}
