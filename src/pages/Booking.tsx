import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronRight, ChevronLeft, Calendar, Clock, MapPin, User, Phone, Mail } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/shared/WhatsAppButton';
import { useToast } from '../hooks/use-toast';

const services = [
  { id: 'quick-fresh', name: 'Quick Fresh', price: 75000, description: 'Fast refresh for lightly worn shoes' },
  { id: 'deep-clean', name: 'Deep Clean Pro', price: 150000, description: 'Complete deep cleaning' },
  { id: 'premium-care', name: 'Premium Care Plus', price: 250000, description: 'Full restoration & protection' },
];

const shoeTypes = [
  { id: 'sneakers', name: 'Sneakers', multiplier: 1 },
  { id: 'leather', name: 'Leather Shoes', multiplier: 1.2 },
  { id: 'boots', name: 'Boots', multiplier: 1.4 },
  { id: 'canvas', name: 'Canvas', multiplier: 0.9 },
  { id: 'suede', name: 'Suede/Nubuck', multiplier: 1.3 },
];

const steps = ['Service', 'Shoes', 'Pick-up', 'Contact', 'Review'];

const formatPrice = (price: number) => `Rp ${price.toLocaleString('id-ID')}`;

const Booking = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [bookingData, setBookingData] = useState({
    service: '',
    shoeType: '',
    pairs: 1,
    address: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  const selectedService = services.find((s) => s.id === bookingData.service);
  const selectedShoeType = shoeTypes.find((s) => s.id === bookingData.shoeType);
  const totalPrice = selectedService && selectedShoeType
    ? Math.round(selectedService.price * selectedShoeType.multiplier * bookingData.pairs)
    : 0;

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const handleSubmit = () => {
    toast({
      title: 'Booking Confirmed!',
      description: `Your booking ID is PCS-${Date.now().toString().slice(-8)}. We'll contact you shortly.`,
    });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-secondary pt-20">
        <div className="container-custom py-12">
          <h1 className="heading-2 mb-8 text-center">Book Your Cleaning Service</h1>

          {/* Progress */}
          <div className="mx-auto mb-12 max-w-2xl">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold ${index <= currentStep
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-gray-200 text-muted-foreground'
                        }`}
                    >
                      {index < currentStep ? <Check className="h-5 w-5" /> : index + 1}
                    </div>
                    <span className="mt-2 text-xs font-medium text-muted-foreground">{step}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`mx-2 h-1 w-8 rounded sm:w-16 ${index < currentStep ? 'bg-primary' : 'bg-gray-200'}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-card p-6 shadow-lg sm:p-8">
                {/* Step 1: Service */}
                {currentStep === 0 && (
                  <div>
                    <h3 className="heading-3 mb-6">Select Service</h3>
                    <div className="space-y-4">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => setBookingData({ ...bookingData, service: service.id })}
                          className={`w-full rounded-xl border-2 p-4 text-left transition-all ${bookingData.service === service.id
                              ? 'border-primary bg-primary-light'
                              : 'border-border hover:border-primary/50'
                            }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-card-foreground">{service.name}</h4>
                              <p className="text-sm text-muted-foreground">{service.description}</p>
                            </div>
                            <span className="font-semibold text-primary">{formatPrice(service.price)}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Shoes */}
                {currentStep === 1 && (
                  <div>
                    <h3 className="heading-3 mb-6">Shoe Details</h3>
                    <div className="mb-6">
                      <label className="mb-2 block text-sm font-medium text-foreground">Shoe Type</label>
                      <div className="grid gap-3 sm:grid-cols-3">
                        {shoeTypes.map((type) => (
                          <button
                            key={type.id}
                            onClick={() => setBookingData({ ...bookingData, shoeType: type.id })}
                            className={`rounded-lg border-2 p-3 text-center transition-all ${bookingData.shoeType === type.id
                                ? 'border-primary bg-primary-light'
                                : 'border-border hover:border-primary/50'
                              }`}
                          >
                            {type.name}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground">Number of Pairs</label>
                      <input
                        type="number"
                        min="1"
                        max="20"
                        value={bookingData.pairs}
                        onChange={(e) => setBookingData({ ...bookingData, pairs: Math.max(1, parseInt(e.target.value) || 1) })}
                        className="w-full rounded-lg border border-input bg-background p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Pick-up */}
                {currentStep === 2 && (
                  <div>
                    <h3 className="heading-3 mb-6">Pick-up Details</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                          <MapPin className="h-4 w-4" /> Address
                        </label>
                        <textarea
                          rows={3}
                          value={bookingData.address}
                          onChange={(e) => setBookingData({ ...bookingData, address: e.target.value })}
                          className="w-full rounded-lg border border-input bg-background p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Full address for pick-up"
                        />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                            <Calendar className="h-4 w-4" /> Date
                          </label>
                          <input
                            type="date"
                            value={bookingData.date}
                            onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                            className="w-full rounded-lg border border-input bg-background p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                            <Clock className="h-4 w-4" /> Time
                          </label>
                          <select
                            value={bookingData.time}
                            onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                            className="w-full rounded-lg border border-input bg-background p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          >
                            <option value="">Select time</option>
                            <option value="09:00-11:00">09:00 - 11:00</option>
                            <option value="11:00-13:00">11:00 - 13:00</option>
                            <option value="13:00-15:00">13:00 - 15:00</option>
                            <option value="15:00-17:00">15:00 - 17:00</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Contact */}
                {currentStep === 3 && (
                  <div>
                    <h3 className="heading-3 mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                          <User className="h-4 w-4" /> Name
                        </label>
                        <input
                          type="text"
                          value={bookingData.name}
                          onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                          className="w-full rounded-lg border border-input bg-background p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                            <Phone className="h-4 w-4" /> Phone
                          </label>
                          <input
                            type="tel"
                            value={bookingData.phone}
                            onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                            className="w-full rounded-lg border border-input bg-background p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="+62 8xx xxxx xxxx"
                          />
                        </div>
                        <div>
                          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                            <Mail className="h-4 w-4" /> Email
                          </label>
                          <input
                            type="email"
                            value={bookingData.email}
                            onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                            className="w-full rounded-lg border border-input bg-background p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-foreground">Additional Notes</label>
                        <textarea
                          rows={3}
                          value={bookingData.notes}
                          onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                          className="w-full rounded-lg border border-input bg-background p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Any special instructions?"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Review */}
                {currentStep === 4 && (
                  <div>
                    <h3 className="heading-3 mb-6">Review Your Booking</h3>
                    <div className="space-y-4 rounded-xl bg-secondary p-6">
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">Service:</span>
                        <span className="font-medium">{selectedService?.name}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">Shoe Type:</span>
                        <span className="font-medium">{selectedShoeType?.name}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">Pairs:</span>
                        <span className="font-medium">{bookingData.pairs}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">Pick-up:</span>
                        <span className="font-medium">{bookingData.date} at {bookingData.time}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">Name:</span>
                        <span className="font-medium">{bookingData.name}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-muted-foreground">Phone:</span>
                        <span className="font-medium">{bookingData.phone}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="mt-8 flex justify-between">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium transition-colors hover:bg-secondary disabled:opacity-50"
                  >
                    <ChevronLeft className="h-5 w-5" /> Back
                  </button>
                  {currentStep < steps.length - 1 ? (
                    <button onClick={nextStep} className="btn-primary flex items-center gap-2">
                      Next <ChevronRight className="h-5 w-5" />
                    </button>
                  ) : (
                    <button onClick={handleSubmit} className="btn-primary">
                      Confirm Booking
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Summary Sidebar */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl bg-card p-6 shadow-lg">
                <h3 className="mb-4 text-lg font-semibold text-card-foreground">Order Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service:</span>
                    <span>{selectedService?.name || '-'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shoe Type:</span>
                    <span>{selectedShoeType?.name || '-'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pairs:</span>
                    <span>{bookingData.pairs}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-primary">{formatPrice(totalPrice)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Booking;
