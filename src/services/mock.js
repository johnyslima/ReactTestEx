import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import companies from './companiesList'

const mock = new MockAdapter(axios)

mock.onGet('/companies').reply(200, {
  companies: companies
});

mock.onGet(/\/company\/\d+/).reply(config => {
  const id = config.url.split('/')[2]
  const company = companies.find((company) => {
    return company.id === id;
  })
  return [200, {company: company}]
})

mock.onPatch(/\/company\/\d+/).reply(config => {
  const company = JSON.parse(config.data)
  return [200, {company: company}]
})