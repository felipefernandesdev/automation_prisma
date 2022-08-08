import { PrismaClient, Booking } from "@prisma/client";

class BookingController {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findAll() {
    try {
      const bookings = await this.prisma.booking.findMany({
        select: {
          id: true,
          startDate: true,
          endDate: true,
          house: {
            select: {
              id: true,
              title: true,
            },
          },
          user: true,
        },
      });
      return bookings;
    } catch (error) {
      return error;
    }
  }

  async create(data: Omit<Booking, "id">) {
    try {
      return this.prisma.booking.create({
        data: {
          ...data,
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default BookingController;
