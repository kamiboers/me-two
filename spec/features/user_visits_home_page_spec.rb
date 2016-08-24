require 'rails_helper'

RSpec.describe "user visits home page", type: :feature do
  it "displays three sub-links" do
    visit root_path

    expect(page).to have_link("about.")
    expect(page).to have_link("code.")
    expect(page).to have_link("contact.")
  end
end