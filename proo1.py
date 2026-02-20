import random

# ask user for the number to check (example: 6)
roll_value = int(input("Enter the roll-up value to check (1–6): "))

# ask for number of trials
trials = int(input("Enter how many times to roll the dice: "))

count = 0

for _ in range(trials):
    roll = random.randint(1, 6)  # simulate dice roll
    if roll == roll_value:
        count += 1

# calculate probability
probability = count / trials

print(f"\nRoll-up value: {roll_value}")
print(f"Total rolls: {trials}")
print(f"Times {roll_value} appeared: {count}")
print(f"Estimated probability: {probability}")
