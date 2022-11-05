/**
 * Vehicle Class
 * By:      Lily Liu
 * Version: 1.0
 * Since:   2022-10-31
 */

class Vehicle {
  private licensePlate: string
  private colour: string
  private readonly numDoors: number
  private readonly maxSpeed: number
  private speed = 0

  constructor(
    colour: string,
    licensePlate: string,
    numDoors: number,
    maxSpeed: number
  ) {
    this.licensePlate = licensePlate
    this.colour = colour
    this.numDoors = numDoors
    this.maxSpeed = maxSpeed
  }

  // getters and setters
  status(): void {
    console.log(
      `        --> Speed: ${this.speed}
        --> MaxSpeed: ${this.maxSpeed}
        --> Number of doors: ${this.numDoors}
        --> License Plate: ${this.licensePlate}
        --> Color: ${this.colour}`
    )
  }

  getLicensePlate(): string {
    return this.licensePlate
  }

  setLicensePlate(newLicensePlate: string): void {
    this.licensePlate = newLicensePlate
  }

  getColor(): string {
    return this.colour
  }

  setColor(newColour: string): void {
    this.colour = newColour
  }

  getDoors(): number {
    return this.numDoors
  }

  getSpeed(): number {
    return this.speed
  }

  // accelerate()
  accelerate(accelerationPower: number, accelerationTime: number): void {
    this.speed = accelerationPower * accelerationTime + this.speed

    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed
    }
  }

  // break()
  break(breakPower: number, breakTime: number): void {
    this.speed = this.speed - breakPower * breakTime

    if (this.speed < 0) {
      this.speed = 0
    }
  }
}

export = Vehicle
