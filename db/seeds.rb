column1 = Column.create(
  title: "À rencontrer",
  index: 0,
)

column2 = Column.create(
  title: "Entretien",
  index: 1,
)

card1 = Card.create(
  id: 1,
  title: "Alpha",
  index: 0,
  column: column1,
)

card2 = Card.create(
  id: 2,
  title: "Tango",
  index: 1,
  column: column1,
)

card3 = Card.create(
  id: 3,
  title: "Charlie",
  index: 0,
  column: column2,
)

card4 = Card.create(
  id: 4,
  title: "Bravo",
  index: 1,
  column: column2,
)

card5 = Card.create(
  id: 5,
  title: "Marshal",
  index: 2,
  column: column1,
)
