const sequelizeConnection = require('./src/db/sequelizeConnection');
const User = require('./src/models/mysql/User');
const ProjectAnnouncement = require('./src/models/mysql/ProjectAnnouncement');
const UserCertification = require('./src/models/mysql/UserCertification');
const UserProject = require('./src/models/mysql/UserProject');

const seedDatabase = async () => {
  await sequelizeConnection.sync({ force: true });

  const projectAnnouncements = await ProjectAnnouncement.bulkCreate([
    {
        title: 'E-Ticaret Web Sitesi Geliştirme',
        description: 'Modern bir e-ticaret web sitesi geliştirmek için deneyimli bir frontend ve backend geliştirici arıyorum. Proje, kullanıcı dostu bir arayüz ve güvenli ödeme sistemleri içerecek.',
        startDate: new Date('2023-11-01'),
        createdBy: users[0].id
    },
    {
        title: 'Mobil Uygulama Geliştirme',
        description: 'Sağlık ve fitness alanında bir mobil uygulama geliştirmek için iOS ve Android platformlarında deneyimli geliştiriciler arıyorum. Uygulama, kullanıcıların egzersiz rutinlerini takip etmelerine ve sağlık verilerini kaydetmelerine yardımcı olacak.',
        startDate: new Date('2023-12-01'),
        createdBy: users[1].id
    },
    {
        title: 'Yapay Zeka Destekli Sohbet Botu',
        description: 'Müşteri hizmetleri için yapay zeka destekli bir sohbet botu geliştirmek istiyorum. Proje, doğal dil işleme (NLP) ve makine öğrenimi (ML) tekniklerini kullanarak müşteri sorularını otomatik olarak yanıtlayacak.',
        startDate: new Date('2024-01-15'),
        createdBy: users[2].id
    },
    {
        title: 'Blockchain Tabanlı Oylama Sistemi',
        description: 'Güvenli ve şeffaf bir oylama sistemi geliştirmek için blockchain teknolojisi konusunda deneyimli geliştiriciler arıyorum. Proje, seçim süreçlerini dijitalleştirmeyi ve güvenliği artırmayı hedefliyor.',
        startDate: new Date('2024-02-01'),
        createdBy: users[0].id
    },
    {
        title: 'Veri Analitiği Platformu',
        description: 'Büyük veri analitiği ve iş zekası çözümleri sunacak bir platform geliştirmek için veri bilimcileri ve yazılım mühendisleri arıyorum. Proje, kullanıcıların verileri görselleştirmelerine ve analiz etmelerine olanak tanıyacak.',
        startDate: new Date('2024-03-01'),
        createdBy: users[1].id
    },
    {
        title: 'Sosyal Medya Yönetim Aracı',
        description: 'Sosyal medya hesaplarını yönetmek ve analiz etmek için kapsamlı bir araç geliştirmek istiyorum. Proje, kullanıcıların içerik planlaması yapmalarına ve performans analizleri gerçekleştirmelerine yardımcı olacak.',
        startDate: new Date('2024-04-01'),
        createdBy: users[2].id
    },
    {
        title: 'Eğitim Platformu',
        description: 'Online eğitimler ve kurslar sunacak bir platform geliştirmek için deneyimli yazılım geliştiriciler arıyorum. Proje, kullanıcıların çeşitli konularda eğitim alabilecekleri ve sertifikalar kazanabilecekleri bir sistem içerecek.',
        startDate: new Date('2024-05-01'),
        createdBy: users[0].id
    },
    {
        title: 'Finansal Yönetim Uygulaması',
        description: 'Kişisel ve kurumsal finansal yönetim için bir uygulama geliştirmek istiyorum. Proje, kullanıcıların gelir ve giderlerini takip etmelerine, bütçe planlaması yapmalarına ve finansal raporlar oluşturmalarına olanak tanıyacak.',
        startDate: new Date('2024-06-01'),
        createdBy: users[1].id
    },
    {
        title: 'Oyun Geliştirme Projesi',
        description: 'Mobil ve PC platformları için bir oyun geliştirmek istiyorum. Proje, yaratıcı ve eğlenceli bir oyun deneyimi sunmayı hedefliyor. Oyun tasarımı, grafikler ve oyun mekaniği konularında deneyimli geliştiriciler arıyorum.',
        startDate: new Date('2024-07-01'),
        createdBy: users[2].id
    },
    {
        title: 'Akıllı Ev Otomasyon Sistemi',
        description: 'Akıllı ev cihazlarını kontrol etmek ve yönetmek için bir otomasyon sistemi geliştirmek istiyorum. Proje, kullanıcıların evlerindeki cihazları uzaktan kontrol etmelerine ve enerji verimliliğini artırmalarına yardımcı olacak.',
        startDate: new Date('2024-08-01'),
        createdBy: users[0].id
    }
]);

  console.log('Database seeded successfully');
};

seedDatabase().catch(err => {
  console.error('Error seeding database:', err);
  process.exit(1);
});