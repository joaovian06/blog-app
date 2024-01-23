FactoryBot.define do
  factory :category do
    title { Faker::Hobby.unique.activity }
    description { "Standard category description" }

    trait :invalid do
      title { "" }
      description { "" }
    end
  end
end
