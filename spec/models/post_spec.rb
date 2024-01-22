require 'rails_helper'

RSpec.describe Post, type: :model do
  describe "factory" do
    context "valid" do
      let(:valid_post) { create(:post) }

      it { expect(valid_post).to be_valid  }
    end

    context "traits" do
      context "invalid" do
        let(:invalid_post) { build(:post, :invalid) }
  
        it { expect(invalid_post.validate).to be_falsy  }
      end
    end
  end

  describe "db columns" do
    it { is_expected.to have_db_column(:title) }
    it { is_expected.to have_db_column(:description) }
  end

  describe "validations" do
    context "presence" do
      it { is_expected.to validate_presence_of(:title) }
      it { is_expected.to validate_presence_of(:description) }
    end

    context "uniqueness" do
      let(:subject) { build(:post) }

      it { is_expected.to validate_uniqueness_of(:title).scoped_to(:category_id) }
    end
  end

  describe "associations" do
    it { is_expected.to belong_to(:category) }
  end
end 
