FactoryBot.define do
  factory :post do
    title { Faker::Lorem.word }
    description { Faker::Lorem.sentence }
    category
    user
  end

  trait :invalid do
    title { "" }
    description { "" }
  end
end
