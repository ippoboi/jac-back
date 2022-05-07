import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { Registration } from './entity/Registration.entity';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectRepository(Registration)
    private registrationRepository: Repository<Registration>,
  ) {}
  create(createRegistrationDto: CreateRegistrationDto) {
    const newRegistration = this.registrationRepository.create(
      createRegistrationDto,
    );
    return this.registrationRepository.save(newRegistration);
  }

  findAll() {
    return this.registrationRepository.find();
  }

  findOne(eventId: number) {
    return this.registrationRepository.findOne({
      where: { eventId },
    });
  }

  async update(id: number, updateRegistrationDto: UpdateRegistrationDto) {
    const registration = await this.findOne(id);

    registration.eventId = updateRegistrationDto.eventId;
    registration.userId = updateRegistrationDto.userId;

    return this.registrationRepository.save(registration);
  }

  async remove(id: number) {
    const registration = await this.findOne(id);
    return this.registrationRepository.remove(registration);
  }
}
