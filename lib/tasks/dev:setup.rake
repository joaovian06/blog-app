namespace :dev do
    task :setup => :environment do
        puts "Resetando banco de dados..."
        %x(rails db:drop db:create db:migrate)

        puts "Criando categorias..."
        category = FactoryBot.create(:category)
        
        puts "Criando usuarios..."
        user = FactoryBot.create(:user, name: "joao vitor", email: "joao@example.com", password: "123456")

        puts "Criando posts..."
        FactoryBot.create_list(:post, 10, user_id: user.id, category: category)
    end
end
