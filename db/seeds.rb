column1 = Column.create(
  title: "À rencontrer",
  position: 0,
)

column2 = Column.create(
  title: "Entretien",
  position: 1,
)

card1 = Card.create(
  title: "Alpha",
  position: 0,
  column: column1,
)

card2 = Card.create(
  title: "Bravo",
  position: 1,
  column: column1,
)

card3 = Card.create(
  title: "Charlie",
  position: 0,
  column: column2,
)

card4 = Card.create(
  title: "Delta",
  position: 1,
  column: column2,
)

card5 = Card.create(
  title: "Echo",
  position: 2,
  column: column1,
)
