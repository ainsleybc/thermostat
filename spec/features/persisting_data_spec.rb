feature 'Persisting data' do
  scenario 'peeps appear in reverse chronological order' do
    visit '/'
    3.times { click_button '+' }
    visit '/'
    current_temp = page.find('#temperature-box p:second-child')
    expect(current_temp).to eq 23
  end
end
