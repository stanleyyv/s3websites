resource "aws_vpc" "private_vpc_1" {
  cidr_block = "10.0.0.0/24"

  tags = {
    terraform   = "true"
    environment = "dev"
    Name        = "dev-us-west-2"
  }
}


resource "aws_subnet" "pubic_subnet_1" {
  vpc_id                  = aws_vpc.private_vpc_1.id
  cidr_block              = "10.0.0.0/26"
  map_public_ip_on_launch = "true"
  availability_zone       = "us-west-2a"

  tags = {
    Name = "dev-us-west-2-public-subnet-1"
  }
}


resource "aws_internet_gateway" "vpc_1" {
  vpc_id = aws_vpc.private_vpc_1.id
  tags = {
    Name = "dev-us-west-2"
  }
}
