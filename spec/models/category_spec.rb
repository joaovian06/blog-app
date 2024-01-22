require 'rails_helper'

RSpec.describe Category, type: :model do
  describe "factory" do
    context "valid" do
      let(:valid_category) { create(:category) }

      it{ expect(valid_category).to be_valid }
    end

    context "traits" do
      context "invalid" do
        let(:invalid_category) { build(:category, :invalid) }

        it { expect(invalid_category.validate).to be_falsy }
      end
    end
  end

  describe "db columns" do
    it { is_expected.to have_db_column(:title) }
    it { is_expected.to have_db_column(:description) }
  end

  describe "validations" do
    context "title" do
      it { is_expected.to validate_presence_of(:title) }
      it { is_expected.to validate_uniqueness_of(:title) }
    end

    context "description" do
      it { is_expected.to validate_presence_of(:description) }
    end
  end

  describe "associations" do
    it { is_expected.to have_many(:posts) }
  end
end
