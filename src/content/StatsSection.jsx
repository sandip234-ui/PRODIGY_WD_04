 <div
          ref={statsRef}
          className="p-8 mt-16 border shadow-xl bg-gray-100/95 backdrop-blur-sm rounded-2xl border-gray-200/50"
        >
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                {statsInView && (
                  <CountUp end={certificates.filter(c => c.category === 'Courses').length} duration={2} />
                )}
              </div>
              <div className="font-medium text-gray-600">Courses Completed</div>
            </div>

            <div className="space-y-2">
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                {statsInView && (
                  <CountUp end={certificates.filter(c => c.category === 'Hackathons').length} duration={2} />
                )}
              </div>
              <div className="font-medium text-gray-600">Hackathons Won</div>
            </div>

            <div className="space-y-2">
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text">
                {statsInView && (
                  <CountUp end={certificates.filter(c => c.category === 'Tech Events').length} duration={2} />
                )}
              </div>
              <div className="font-medium text-gray-600">Events Attended</div>
            </div>
          </div>
        </div>