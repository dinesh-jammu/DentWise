import { PrismaClient, Gender } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // clear existing doctors
  await prisma.doctor.deleteMany({});

  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      email: "sarah.johnson@dentwise.com",
      phone: "(555) 123-4567",
      speciality: "Pediatric Dentistry",
      bio: "Dr. Johnson has over 12 years of experience working with children and making them feel comfortable during their dental visits.",
      imageUrl: "https://images.unsplash.com/photo-1559839734-2b71f1e3c7e0?q=80&w=200&h=200&auto=format&fit=crop",
      gender: Gender.FEMALE,
      isActive: true,
    },
    {
      name: "Dr. Michael Chen",
      email: "michael.chen@dentwise.com",
      phone: "(555) 987-6543",
      speciality: "Orthodontics",
      bio: "Specializing in braces and Invisalign, Dr. Chen helps patients achieve their perfect smile with the latest orthodontic technology.",
      imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&h=200&auto=format&fit=crop",
      gender: Gender.MALE,
      isActive: true,
    },
    {
      name: "Dr. Elena Rodriguez",
      email: "elena.rodriguez@dentwise.com",
      phone: "(555) 456-7890",
      speciality: "Cosmetic Dentistry",
      bio: "Dr. Rodriguez focuses on aesthetic improvements, including whitening, veneers, and full smile makeovers.",
      imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=200&h=200&auto=format&fit=crop",
      gender: Gender.FEMALE,
      isActive: true,
    },
    {
      name: "Dr. David Smith",
      email: "david.smith@dentwise.com",
      phone: "(555) 234-5678",
      speciality: "Oral Surgery",
      bio: "With advanced training in oral surgery, Dr. Smith provides expert care for wisdom teeth extractions and dental implants.",
      imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&h=200&auto=format&fit=crop",
      gender: Gender.MALE,
      isActive: true,
    },
  ];

  for (const doctor of doctors) {
    await prisma.doctor.create({
      data: doctor,
    });
  }

  console.log("Seed successful!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
