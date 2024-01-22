FactoryBot.define do
  factory :category do
    title { %w(food technology music).sample }
    description { "Standard category description" }

    trait :invalid do
      title { "" }
      description { "" }
    end
  end
end
