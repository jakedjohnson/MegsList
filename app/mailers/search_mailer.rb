class SearchMailer < ApplicationMailer
  default from: 'notifications@craigslistcompiler.com'

  def new_results(search)
    @search = search
    user = User.find(search.user_id)
    @new_results = search.results.deliverable.includes(:listing)
    mail(to: user.email, subject: "New Results for \"#{search.name}\"")
  end
end
