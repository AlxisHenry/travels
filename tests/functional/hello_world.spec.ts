import { test } from '@japa/runner'

test('display homepage', async ({ client }) => {
  const response = await client.get('/')
  response.assertStatus(200)
})
